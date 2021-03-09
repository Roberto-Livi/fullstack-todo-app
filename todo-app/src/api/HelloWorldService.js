import axios from "axios"

class HelloWorldService {
    executedHelloWorldService = () => {
        return axios.get('http://localhost:8080/hello-world')
    }

    executedHelloWorldBeanService = () => {
        return axios.get('http://localhost:8080/hello-world-bean')
    }
}

export default new HelloWorldService()