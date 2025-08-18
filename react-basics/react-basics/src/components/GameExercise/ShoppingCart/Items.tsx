import {Item} from "./index.ts";

const Items = () => {
    return (<div className="row">
        <div className="col-12">
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Title</th>
                    <th scope="col" className="text-center">Quantity</th>
                </tr>
                </thead>
                <tbody>
                <Item/>
                <Item/>
                </tbody>
            </table>
        </div>
    </div>);
}
export default Items;