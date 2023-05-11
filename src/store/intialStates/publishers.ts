import CommonStateInterface from "../interfaces/CommonState.interface";
import PublisherInterface from "../interfaces/Publisher.interface";

interface PublishersInterface extends CommonStateInterface {
    data: PublisherInterface[]
}

const publishers: {publishers: PublishersInterface} = {
    publishers: {data: [], loading: false, error: null}
};

export default publishers;