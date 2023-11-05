export const styleSheet = {

    textField: {
        "& label.Mui-focused": {
            color: "#3B82F6",
        }, "& .MuiInput-underline:after": {
            borderBottomColor: "white",
        }, "& .MuiOutlinedInput-root": {
            "& fieldset": {
                'rgba(0, 0, 0, 0.23)': "#AAAAAA",
            }, "&:hover fieldset": {
                'rgba(0, 0, 0, 0.23)': "white",
            }, "&.Mui-focused fieldset": {
                'rgba(0, 0, 0, 0.23)': "White",
            },
        }, "& .MuiOutlinedInput-root input": {
            color: "black",
        }, "& label": {
            color: "#AAAAAA",
        }, '.css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input': {
            color: 'red'
        },

        "& .css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
            borderColor: '#3B82F6'
        }, "&:hover .css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
            borderColor: '#3B82F6'
        },
    },
    btnUpload: {
        display: 'flex',
        width: '100%',
        height: '150px',
        padding: '32px',
        margin: '0px',
        flexDirection: 'column',
        textAlign: 'center',
        alignItems:'center',
        alignContent:'center',
        flexWrap:'wrap',

        '& .css-1d6wzja-MuiButton-startIcon>*:nth-of-type(1)':{
            fontSize:'40px',
            margin: 'auto'
        }

    }
}