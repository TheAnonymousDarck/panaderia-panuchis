import { toastController, alertController } from "@ionic/vue";
import { closeOutline, shieldCheckmarkOutline, warningOutline, informationOutline, checkmarkCircleOutline } from 'ionicons/icons';


export const useToast = () => {
    const icons = {
        check: shieldCheckmarkOutline,
        close: closeOutline,
        warning: warningOutline,
        info: informationOutline,
        success: checkmarkCircleOutline,
    }
    

    return{
        icons,

        async openToast(msg:string, color?: string, icon?:string, duration?:number) {
            const toast = await toastController
            .create({
                message: msg,
                duration: duration ? duration : 2000,
                color: color ? color : "dark",
                icon: icon ? icon : ''
            })
            return toast.present();
        },
        
        async alertConfirm(msg:string, header:string, fnConfirmAction?:any, cssClassFirst?:string, cssClassBtn?:string) {
            const fnConfirmActionTemplate = () => {
                console.log('Confirm Okay'); 
                this.openToast('Acción realizada con exito', 'success', icons.success);
            }

            const alert = await alertController.create({
                cssClass: cssClassFirst ? cssClassFirst : 'tertuary',
                header: header ? header :'Confirmar acción',
                message: msg ? msg : 'Message <strong>text</strong>!!!',
                buttons: [
                    {
                        text: 'Cancelar',
                        role: 'cancel',
                        cssClass: 'secondary',
                        id: 'cancel-button',
                        handler: blah => {
                            console.log('Confirm Cancel:', blah)
                        },
                    },
                    {
                        text: 'Ok',
                        cssClass: cssClassBtn ? cssClassBtn : 'danger',
                        id: 'confirm-button',
                        handler: () => fnConfirmAction ? fnConfirmAction : fnConfirmActionTemplate,
                    },
                ],
            });
            return alert.present();
        },

        async showAlert(){
        const alert = await alertController.create({
            cssClass: 'normal',
            header: 'Advertencia',
            message: ' Seguro desea <strong>eliminar</strong> este producto',
            buttons: [
                {
                    text: 'cancelar',
                    role: 'cancel',
                    cssClass: 'normal',
                    handler: (blah) => {
                    console.log('Confirm Cancel: blah', blah);
                    // this.alertController.dismiss();
                }
            }, 
            {
                text: 'Ok',
                handler: () => {
                    // console.log('Confirm Okay');
                    // this.firestoreService.deleteDoc(this.path, producto.id).then( res => {
                    //     this.presentToast('eliminado con exito');
                    //     this.alertController.dismiss();
                    // }).catch( error => {
                    //     this.presentToast('no se pude eliminar');
                    // });
                }
            }
            ]
        });
            await alert.present();
        },
    }

}