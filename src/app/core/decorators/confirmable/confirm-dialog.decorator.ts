import { ConfirmableComponent,  } from './component/confirmable.component';
import { DialogService } from './services';
import { ConfirmDialogData } from './models';

const defaultConfirmData = {
  title: 'გაუქმება',
  message: 'ნამდვილად გსურთ გაუქმება?'
}

export function Confirmable (confirmData : ConfirmDialogData = defaultConfirmData) {

  return function (target: Object, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = async function (...args: any) {
      DialogService.getInstance()?.openDialog(confirmData,ConfirmableComponent).subscribe((validation) => {
        if (validation){
          originalMethod.apply(this, args);
        }
      });
    };

    return descriptor;
  };

}
