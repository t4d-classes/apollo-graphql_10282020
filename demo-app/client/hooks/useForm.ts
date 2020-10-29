import { useState, ChangeEvent } from 'react';

export const strToNaN = (value: string) => (value === '' ? NaN : Number(value));

type HTMLFormControls =
  | HTMLInputElement
  | HTMLSelectElement
  | HTMLTextAreaElement;

export type Change = (e: ChangeEvent<HTMLFormControls>) => void;

export type ResetForm = () => void;

export type UseForm = <T>(initialForm: T) => [T, Change, ResetForm];

export const useForm: UseForm = (initialForm) => {
  const [form, setForm] = useState(initialForm);

  const change = ({
    target: { name, type, value },
  }: ChangeEvent<HTMLFormControls>) => {
    setForm({
      ...form,
      [name]: type === 'number' ? strToNaN(value) : value,
    });
  };

  const resetForm = () => setForm(initialForm);

  return [form, change, resetForm];
};
