import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

const noti_download = () => {
    toast.success('Libro descargado correctamente', {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        icon: "📕"
    });
}

export default {
    noti_download
}