const Item = () => {
    return (
        <tr>
            <th scope="row">1</th>
            <td>Product 1</td>
            <td className="text-center">
                <span>-</span>
                <input type="text" className="form-control-sm text-center ms-1 me-1" value={1}/>
                <span>+</span>
            </td>
        </tr>
    );
}
export default Item;