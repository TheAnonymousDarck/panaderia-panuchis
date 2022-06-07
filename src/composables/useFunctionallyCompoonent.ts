import { toastController } from "@ionic/vue";
import { closeOutline, shieldCheckmarkOutline, warningOutline, informationOutline } from 'ionicons/icons';


export const useToast = () => {
    const icons = {
        check: shieldCheckmarkOutline,
        close: closeOutline,
        warning: warningOutline,
        info: informationOutline,
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
    }

}