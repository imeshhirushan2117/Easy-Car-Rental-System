import { DataGrid } from "@mui/x-data-grid";
import { Component } from "react";

class CommonDataTable extends Component {
    render() {
        const {
            rows,
            columns,
            pageSize,
            rowsPerPageOptions,
            checkboxSelection
        } = this.props;

        return (
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={pageSize}
                rowsPerPageOptions={[rowsPerPageOptions]}
                checkboxSelection={checkboxSelection}
            />
        )
    }
}
export default CommonDataTable;