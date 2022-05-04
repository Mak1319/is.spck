const moduleImporter={
	
	javascript:{
		'react':[
			'useState',
			'useEffect',
			'useRef',
			'useMemo',
			'useContext',
			'useReducer',
			'useReducer',
			'useCallback',
			'useMemo',
			'useRef',
			'useImperativeHandle',
			'useLayoutEffect',
			'useDebugValue',
			'useDeferredValue',
			'useTransition',
			'useId',
			'useSyncExternalStore',
			'useInsertionEffect'
		],
		get "@mui/material"(){
			return [...new Set(`Accordion|AccordionActions|AccordionDetails|AccordionSummary|Alert|AlertTitle|AppBar|
								Autocomplete|Avatar|AvatarGroup|Backdrop|Badge|BottomNavigation|BottomNavigationAction
								|Box|Breadcrumbs|Button|ButtonBase|ButtonGroup|Card|CardActionArea|CardActions|CardContent|
								CardHeader|CardMedia|Checkbox|Chip|CircularProgress|ClickAwayListener|Collapse|Container|CssBaseline
								|Dialog|DialogActions|DialogContent|DialogContentText|DialogTitle|Divider|Drawer|Fab|Fade|FilledInput|
								FormControl|FormControlLabel|FormGroup|FormHelperText|FormLabel|GlobalStyles|Grid|Grow|Hidden|Icon|
								IconButton|ImageList|ImageListItem|ImageListItemBar|Input|InputAdornment|InputBase|InputLabel|
								LinearProgress|Link|List|ListItem|ListItemAvatar|ListItemButton|ListItemIcon|ListItemSecondaryAction
								|ListItemText|ListSubheader|Menu|MenuItem|MenuList|MobileStepper|Modal|NativeSelect|NoSsr|OutlinedInput
								|Pagination|PaginationItem|Paper|Popover|Popper|Portal|Radio|RadioGroup|Rating|ScopedCssBaseline|Select
								|Skeleton|Slide|Slider|Snackbar|SnackbarContent|SpeedDial|SpeedDialAction|SpeedDialIcon|Stack|Step|
								StepButton|StepConnector|StepContent|StepIcon|StepLabel|Stepper|StyledEngineProvider|SvgIcon|
								SwipeableDrawer|Switch|Tab|TabScrollButton|Table|TableBody|TableCell|TableContainer|TableFooter|TableHead
								|TablePagination|TableRow|TableSortLabel|Tabs|TextField|TextareaAutosize|ToggleButton|ToggleButtonGroup
								|Toolbar|Tooltip|Typography|useAutocomplete|useMediaQuery|usePagination|useScrollTrigger|useTouchRipple
			`.replace(/[,\n\s]/gi,'|').split('|'))]
		},
		get '@mui/icons-material'(){
			return [... new Set(``.replace(/[,\n\s]/gi,'|'.split('|')))]
		}
	},
	get jsx(){
		return this.javascript;
	}
}
