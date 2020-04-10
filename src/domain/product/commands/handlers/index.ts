import { RegisterProductHandler } from './register-product.handler';
import { ModificationProductHandler } from './modification-product.handler';
import { RemoveProductHandler} from './remove-product.handler';

export const CommandHandlers = [ModificationProductHandler, RegisterProductHandler, RemoveProductHandler];
export { RegisterProductHandler };
