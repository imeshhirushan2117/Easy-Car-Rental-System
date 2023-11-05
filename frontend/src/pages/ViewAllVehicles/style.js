export const styleSheet = {

    test: {
        backgroundColor: 'red'
    },
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
            color: "White",
        }, "& label": {
            color: "#AAAAAA",
        }, '.css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input': {
            color: 'red'
        }
    },

    root:{
        "& $notchedOutline": {
            borderColor: 'red'
        },
        "&:hover $notchedOutline": {
            borderColor: 'red'
        },
        "&$focused $notchedOutline": {
            borderColor: 'red'
        }
    },
}
/*
MuiOutlinedInput - root
MuiInputBase - root
MuiInputBase - colorPrimary
MuiInputBase - adornedEnd
ViewAllVehicles - t - 9
css - o9k5xi - MuiInputBase - root - MuiOutlinedInput - root
*/
