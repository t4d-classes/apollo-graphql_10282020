import { RESTDataSource } from 'apollo-datasource-rest';

export class BaseAPI extends RESTDataSource {
  // protected resourceName: string;

  // constructor(baseURL: string, resourceName: string) {
  //   super();
  //   this.baseURL = baseURL;
  //   this.resourceName = resourceName;
  // }

  constructor(baseURL: string, protected resourceName: string) {
    super();
    this.baseURL = baseURL;
  }

  collectionUrl() {
    return this.baseURL + '/' + this.resourceName;
  }

  memberUrl(memberId: string | number) {
    return this.collectionUrl() + '/' + encodeURIComponent(String(memberId));
  }
}
