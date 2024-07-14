import {
  // Typography,
  Box,
  // InputAdornment,
  // MenuItem,
  // TextField,
} from "@mui/material";

// Interfaces
import { TableFilter } from "../../../libs/interfaces";

interface Props {
  filters: TableFilter[];
}

const TableFilters = ({ filters }: Props) => {
  return (
    <Box
      sx={{
        display: "flex",
        mb: 1,
        mt: 2,
      }}
    >
      {filters.map(
        () => (
          <></>
        )
        // <Box
        //   key={index}
        //   sx={{
        //     display: "flex",
        //     flexDirection: "column",
        //     ml: index ? 1 : 0,
        //     width: `${width}%`,
        //     flexGrow: index ? 0 : 1,
        //   }}
        // >
        //   <Typography variant="body2" sx={{ mb: 1 }}>
        //     {title}
        //   </Typography>
        //   {select && items && items.length > 0 ? (
        //     <TextField
        //       fullWidth
        //       select={select}
        //       size="small"
        //       type="text"
        //       autoComplete={autoComplete}
        //       onChange={(e) => handleSearch(label, e.target.value)}
        //       value={searchParams.get(label) || defaultValue}
        //       InputProps={{
        //         startAdornment: (
        //           <InputAdornment position="start">
        //             {<params.icon fontSize="small" />}
        //           </InputAdornment>
        //         ),
        //       }}
        //     >
        //       <MenuItem value="Seleccionar" disabled>
        //         Seleccionar
        //       </MenuItem>
        //       {items.map(({ label, value }, index) => (
        //         <MenuItem key={index} value={value}>
        //           <Typography variant="body2">{label}</Typography>
        //         </MenuItem>
        //       ))}
        //     </TextField>
        //   ) : (
        //     <TextField
        //       fullWidth
        //       size="small"
        //       type="text"
        //       autoComplete="off"
        //       placeholder={placeholder}
        //       onChange={(e) => handleSearch(label, e.target.value)}
        //       defaultValue={searchParams.get(label) || defaultValue}
        //       InputProps={{
        //         startAdornment: (
        //           <InputAdornment position="start">
        //             {<params.icon fontSize="small" />}
        //           </InputAdornment>
        //         ),
        //       }}
        //     />
        //   )}
        // </Box>
      )}
    </Box>
  );
};

export { TableFilters };
