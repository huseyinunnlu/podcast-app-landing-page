import ApiService from "../ApiService";
import { appAxios } from "../AppAxios";

class AuthApi extends ApiService {
  static getData(url) {
    return new Promise((resolve, reject) => {
      appAxios.post(url).then((response) => {
        if (response.data) {
          resolve("Success");
        } else {
          reject("Error");
        }
      });
    });
  }
}

export default AuthApi;
