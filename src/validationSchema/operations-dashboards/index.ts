import * as yup from 'yup';

export const operationsDashboardValidationSchema = yup.object().shape({
  dashboard_name: yup.string().required(),
  user_id: yup.string().nullable().required(),
});
