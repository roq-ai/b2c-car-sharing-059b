import { OperationsStaffInterface } from 'interfaces/operations-staff';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface OperationsDashboardInterface {
  id?: string;
  dashboard_name: string;
  user_id: string;
  created_at?: any;
  updated_at?: any;
  operations_staff?: OperationsStaffInterface[];
  user?: UserInterface;
  _count?: {
    operations_staff?: number;
  };
}

export interface OperationsDashboardGetQueryInterface extends GetQueryInterface {
  id?: string;
  dashboard_name?: string;
  user_id?: string;
}
