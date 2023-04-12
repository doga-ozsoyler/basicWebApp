import { useEffect } from "react";
import { useToast } from "native-base";
import SuccessAlert from "../components/SuccessAlert";

const showToast = (response, error, showToast, setShowToast) => {
  const toast = useToast();

  useEffect(() => {
    if (!error && response && showToast) {
      toast.show({
        render: () => {
          return <SuccessAlert />;
        },
      });
    }
    setShowToast(false);
  }, [error, response]);
};

export default showToast;
