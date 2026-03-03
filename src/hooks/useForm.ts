import { ChangeEvent, FormEvent, useState } from "react";

type FormFieldElement =
  | HTMLInputElement
  | HTMLTextAreaElement
  | HTMLSelectElement;

type FormValues = Record<string, string>;

export function useForm<T extends FormValues>(initialValues: T) {
  const [values, setValues] = useState<T>(initialValues);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event: ChangeEvent<FormFieldElement>) => {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
  };

  const resetForm = () => {
    setValues(initialValues);
  };

  const handleSubmit =
    (onSubmit: (formValues: T) => void | Promise<void>) =>
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      setIsSubmitting(true);

      try {
        await onSubmit(values);
      } finally {
        setIsSubmitting(false);
      }
    };

  return {
    values,
    isSubmitting,
    handleChange,
    handleSubmit,
    resetForm,
    setValues,
  };
}
