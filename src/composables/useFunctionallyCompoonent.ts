import { toastController } from "@ionic/vue";
import { closeOutline, shieldCheckmarkOutline, warningOutline } from 'ionicons/icons';


export const useToast = () => {
    const icons = {
        check: shieldCheckmarkOutline,
        close: closeOutline,
        warning: warningOutline,

    }

    return{
        icons,

        async openToast(msg:string, color?: string, icon?:string) {
            const toast = await toastController
            .create({
                message: msg,
                duration: 2000,
                color: color ? color : "dark",
                icon: icon ? icon : ''
            })
            return toast.present();
        },
    }

}