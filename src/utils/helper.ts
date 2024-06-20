import toast from "react-hot-toast";

export function makeToast(text: string, status: string){
    if(status === "success"){
        toast.success(text, {
            style: {
                borderRadius: "4px",
                backgroundColor: "#333",
                color: "#fff"
            }
        });
    }else {
        toast.error(text, {
            style: {
                borderRadius: "4px",
                backgroundColor: "#333",
                color: "#fff"
            }
        })
    }
}