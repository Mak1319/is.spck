const muiReactAbbreviations={
	'autocom':`<Autocomplete\n\tdisablePortal\n\toptions={top100Films}\n\tsx={{ width: 300 }}\n\trenderInput={(params) => <TextField {...params} label="Movie" />}\n/>`,
	'autocom:g':`<Autocomplete\n\tid="grouped-demo"\n\toptions={options.sort((a, b) => -b.firstLetter.localeCompare(a.firstLetter))}\n\tgroupBy={(option) => option.firstLetter}\n\tgetOptionLabel={(option) => option.title}\n\tsx={{ width: 300 }}\n\trenderInput={(params) => <TextField {...params} label="With categories" />}\n/>`,
	'autocom:d':`<Autocomplete\n\tid="disabled-options-demo"\n\toptions={timeSlots}\n\tgetOptionDisabled={(option) =>\n\t\n\toption === timeSlots[0] || option === timeSlots[2]\n\t}\n\tsx={{ width: 300 }}\n\trenderInput={(params) => <TextField {...params} label="Disabled options" />}\n/>`,
	'btn':`<Button variant="contained">Contained</Button>`,
	'btn:txt':`<Button variant="text">Text</Button>`,
	'btn:ol':'<Button variant="outlined">Outlined</Button>',
	'btn:d':'<Button disabled>Disabled</Button>',
	'btn:ln':'<Button href="#text-buttons">Link</Button>',
	'btn:con:d':'<Button variant="contained" disabled>Disabled</Button>',
	'btn:d:con':'<Button variant="contained" disabled>Disabled</Button>',
	'btn:de':'<Button variant="contained" disableElevation>Disable elevation</Button>',
	'btn:d:ol':'<Button variant="outlined" disabled>Disabled</Button>',
	'btn:ol:d':'<Button variant="outlined" disabled>Disabled</Button>',
	'btn:ol:ln':'<Button variant="outlined" href="#outlined-buttons">Link</Button>',
	'btn:ln:ol':'<Button variant="outlined" href="#outlined-buttons">Link</Button>',
	
}


window.jsxAbbreviation={...window.jsxAbbreviation,...muiReactAbbreviations}
