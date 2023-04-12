import { useEffect } from "react";
import { useToast } from "native-base";
import SuccessAlert from "../components/successAlert";

const showToast = (response, error) => {
  const toast = useToast();

  useEffect(() => {
    if (!error && response) {
      toast.show({
        render: () => {
          return <SuccessAlert />;
        },
      });
    }
  }, [error, response]);
};

export default showToast;
