import { useFormik } from 'formik';
import React, { useState } from 'react';
import { number, object, string } from 'yup';
import styled, { Box } from '@xstyled/styled-components';

import { th } from '@xstyled/system';
import {
  Input, Button, Card, Spinner, Error,
} from '../../components';
import { Passenger } from '../../domain';

const validationSchema = object().shape<Pick<Passenger, 'name' | 'bags'>>({
  name: string()
    .trim()
    .required()
    .min(2)
    .matches(/^[A-Z]/, 'Name must be start in uppercase'),
  bags: number()
    .oneOf([1, 2, 3, 4, 5], 'Min 1 bag and maximun 5 ')
    .required('You must to indicates an number of bags'),
});

type PassengerFormProps = {
  onSave: (passenger: Pick<Passenger, 'bags' | 'name'>) => Promise<void>;
};

const SForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${th('space.md')};
`;

const getError = (
  error: string | undefined,
  submitCount: number,
): string | undefined => (submitCount && error ? error : undefined);

const PassengerForm: React.FC<PassengerFormProps> = ({ onSave }) => {
  const [state, setState] = useState<{
    error: Nullable<string>;
    success: boolean;
  }>({
    error: null,
    success: false,
  });
  const {
    handleSubmit,
    values,
    handleChange,
    errors,
    submitCount,
    isSubmitting,
    isValid,
    submitForm,
  } = useFormik<Pick<Passenger, 'bags' | 'name'>>({
    initialValues: {
      name: '',
      bags: 1,
    },
    onSubmit: (newValues, { setSubmitting }) => {
      setState({
        error: null,
        success: false,
      });
      onSave(newValues)
        .then(() => {
          setState({
            success: true,
            error: null,
          });
          setSubmitting(false);
        })
        .catch((err: AnyError) => {
          setState({
            success: false,
            error: err.reason,
          });
          setSubmitting(false);
        });
    },
    validationSchema,
  });

  return (
    <>
      {state.error && (
        <Error
          title="Error to save client"
          message={state.error}
          onRetry={submitForm}
          onClose={() => {
            setState({
              error: null,
              success: false,
            });
          }}
        />
      )}
      <Card>
        <SForm onSubmit={handleSubmit} noValidate>
          <Input
            label="Name"
            required
            error={getError(errors.name, submitCount)}
            name="name"
            value={values.name}
            onChange={handleChange}
          />
          <Input
            label="Bags"
            type="number"
            min={1}
            max={5}
            error={getError(errors.bags, submitCount)}
            required
            name="bags"
            value={values.bags}
            placeholder="Bags"
            onChange={handleChange}
          />
          {state.success && <b>A new client has been saved</b>}
          <Button
            disabled={isSubmitting || (submitCount > 0 && !isValid)}
            type="submit"
          >
            {isSubmitting ? (
              <Box
                width="100%"
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <Spinner />
              </Box>
            ) : (
              'Save'
            )}
          </Button>
        </SForm>
      </Card>
    </>
  );
};

export default PassengerForm;
