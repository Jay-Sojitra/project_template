import Table from 'react-bootstrap/Table';
import "./Card1.css"
function HistoryPage() {
    return (
        <div className="container mt- img5">
            <h2>Purchased NFTs</h2>
            <div className="div1">
                <div className="div2">
                    <Table striped bordered hover className="mt-4 table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Price in ETH</th>
                                <th>Price in INR</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Mark</td>
                                <td>0.01 ETH</td>
                                <td>1574.63₹</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Jacob</td>
                                <td>0.02 ETH</td>
                                <td>3149.26₹</td>
                            </tr>
                           
                            
                        </tbody>
                    </Table>
                </div>
            </div>
        </div>
    );
}

export default HistoryPage
