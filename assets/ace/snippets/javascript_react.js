define("ace/snippets/javascript_react", ["require", "exports", "module"], function (e, t, n) {
	"use strict"
	;(t.snippetText =
	`
snippet function
	function \${1?:fname}(\${2?:arg}) {
		\${0:// body...}
	}
snippet function =>
	(\${1:arg}) => \${0}
snippet async =>
	async (\${1:arg}) => \${0}
snippet async function
	async function \${1?:fname}(\${2?:arg}) {
		\${0:// body...}
	}
# if
snippet if
	if (\${1:true}) {
	\${0}
	}
# if ... else
snippet if .. else
	if (\${1:true}) {
	\${2}
	} else {
	\${0}
	}
# tertiary conditional
snippet conditional
	\${1:/* condition */} ? \${2:a} : \${3:b}
# switch
snippet switch
	switch (\${1:expression}) {
		\${0}
	}
# case
snippet case
	case '\${1:case}':
		\${2:// code}
		break;
		\${3}
# while (...) {...}
snippet while
	while (\${1:/* condition */}) {
		\${0:/* code */}
	}
# try
snippet try
	try {
		\${0:/* code */}
	} catch (e) {}
# do...while
snippet do
	do {
		\${2:/* code */}
	} while (\${1:/* condition */});
# Object Method
snippet :function
regex /([,{[])|^\\s*/:f/
	\${1:method_name}: function(\${2:attribute}) {
		\${0}
	}\${3:,}
# console.log (Firebug)
snippet log
	console.log(\${1});
# return
snippet ret
	return \${1:result}
# for (property in object ) { ... }
snippet for loop
	for (var \${1:prop} in \${2:Things}) {
		\${0:\$2[\$1]}
	}
# docstring
snippet /**
	/**
	* \${1:description}
	*
	*/
snippet @param
regex /^\\s*\\*\\s*/@(para?m?)?/
	@param {\${1:type}} \${2:name} \${3:description}
snippet @ret
	@return {\${1:type}} \${2:description}
# class
snippet class
	class \${1:Name} {
		constructor(\${20}) {
			\${60:this.prop = \"\"}
		}
	}
# for
snippet for
	for (var \${1:i} = 0; \$1 < \${2:Things}.length; \$1++) {
		\${3:\$2[\$1]}\$0
	}
# declaration
snippet var
	var \${1:name} = \${0:value}
snippet let
	let \${1:name} = \${0:value}
snippet const
	const \${1:name} = \${0:value}
snippet rafce
	import React from 'react'
	
	const \${1/./\\u\$0/} = () => {
	  return <>\${1:first}</>
	}
	
	export default \${1/./\\u\$0/}
snippet useState
	const [\${1:first}, set\${1/./\\u\$0/}] = useState(\${2:second})
snippet rcce:
	import React from "react";
	
	class \${1/./\\u\$0/} extendsReact.Component{
		render(){
			return(<>$1</>);
		}
	}
	
	export default \${1/./\\u\$0/};

snippet muiAppBar
	<AppBar position="\${1|fixed,absolute,relative,static,sticky|}" color="\${2|primary,default,inherit,secondary,transparent|}">
	  <Toolbar$3>
	    <Typography variant="h6"$4>
	      $5
	    </Typography>
	  </Toolbar>
	</AppBar>
	
snippet muiAppBarMenu
	<AppBar position="\${1|fixed,absolute,relative,static,sticky|}" color="\${2|primary,default,inherit,secondary,transparent|}">
	  <Toolbar$3>
	    <IconButton edge="start" color="inherit" aria-label="menu">
	      <Menu />
	    </IconButton>
	    <Typography variant="h6"$4>
	      $5
	    </Typography>
	  </Toolbar>
	</AppBar>
	
snippet muiBottomNavigation
	<BottomNavigation value={$1} onChange={$2}$3>
	  $4
	</BottomNavigation>
	
snippet muiBottomNavigationAction
	<BottomNavigationAction label="$1" value={$2} icon={$3}$4 />
	
snippet muiButton
	<Button variant="\${1|text,contained,outlined|}" color="\${2|default,inherit,primary,secondary|}"$3>
	  $4
	</Button>
	
snippet muiButtonGroup
	<ButtonGroup variant="\${1|text,contained,outlined|}" color="\${2|default,inherit,primary,secondary|}" aria-label="$3"$4>
	  <Button>$5</Button>
	  <Button>$6</Button>
	  $7
	</ButtonGroup>
	
snippet muiButtonGroupSize
	<ButtonGroup variant="\${1|text,contained,outlined|}" color="\${2|default,inherit,primary,secondary|}" size="\${3|small,medium,large|}" aria-label="$4"$5>
	  <Button>$6</Button>
	  <Button>$7</Button>
	  $8
	</ButtonGroup>
	
snippet muiButtonGroupVertical
	<ButtonGroup orientation="vertical" variant="\${1|text,contained,outlined|}" color="\${2|default,inherit,primary,secondary|}" aria-label="$3"$4>
	  <Button>$5</Button>
	  <Button>$6</Button>
	  $7
	</ButtonGroup>
	
snippet muiButtonSize
	<Button
	  variant="\${1|text,contained,outlined|}"
	  color="\${2|default,inherit,primary,secondary|}"
	  size="\${3|small,medium,large|}"
	  $4
	>
	  $5
	</Button>
	
snippet muiButtonText
	<Button color="\${1|default,inherit,primary,secondary|}"$2>$3</Button>
	
snippet muiButtonWithIcon
	<Button
	  variant="\${1|text,contained,outlined|}"
	  color="\${2|default,inherit,primary,secondary|}"
	  startIcon={$3}
	  $4
	>
	  $5
	</Button>
	
snippet muiCardHeader
	<CardHeader\${1:
	  avatar={
	    <Avatar aria-label="$2"$3>
	      $4
	    </Avatar>
	  \}}\${5:
	  action={
	    <IconButton aria-label="$6"$7>
	      $8
	    </IconButton>
	  \}}\${9:
	  title="$10"}\${11:
	  subheader="$12"}
	  $13
	/>
	
snippet muiCardMedia
	<CardMedia title="$1" image="$2" />
	
snippet Controlled
	<FormControlLabel
	  label="$1"
	  control={
	    <Checkbox
	      value="$2"
	      checked={$3}
	      onChange={$4}
	      color="\${5:primary}"
	    />
	  }
	/>
	
snippet Uncontrolled
	<FormControlLabel
	  label="$1"
	  control={
	    <Checkbox
	      value="$2"
	      defaultChecked={$3}
	      color="\${4:primary}"
	    />
	  }
	/>
	
snippet Controlled
	<FormControlLabel
	  label="$1"
	  labelPlacement="\${2|end,start,top,bottom|}"
	  control={
	    <Checkbox
	      value="$3"
	      checked={$4}
	      onChange={$5}
	      color="\${6:primary}"
	    />
	  }
	/>
	
snippet Uncontrolled
	<FormControlLabel
	  label="$1"
	  labelPlacement="\${2|end,start,top,bottom|}"
	  control={
	    <Checkbox
	      value="$3"
	      defaultChecked={$4}
	      color="\${5:primary}"
	    />
	  }
	/>
	
snippet muiContainer
	<Container maxWidth="\${1|xs,sm,md,lg,xl|}"$2>
	  $3
	</Container>
	
snippet muiDialog
	<Dialog open={$1} onClose={$2} aria-labelledby={$3}>\${4:
	  <DialogTitle id={$3\}>
	    $5
	  </DialogTitle>}\${6:
	  <DialogContent>\${7:
	    <DialogContentText>
	      $8
	    </DialogContentText>}
	  </DialogContent>}\${9:
	  <DialogActions>
	    <Button onClick={$10\} color="\${11|default,inherit,primary,secondary|}">\${12:
	      Cancel}
	    </Button>
	  </DialogActions>}
	</Dialog>
	
snippet muiDialogSimple
	<Dialog open={$1} onClose={$2} aria-labelledby="$3">
	  $4
	</Dialog>
	
snippet muiDrawerPermanent
	<Drawer variant="permanent" anchor="\${1|left,right,top,bottom|}"$2>
	  $3
	</Drawer>
	
snippet muiDrawerPersistent
	<Drawer
	  variant="persistent"
	  anchor="\${1|left,right,top,bottom|}"
	  open={$2}
	  $3
	>
	  $4
	</Drawer>
	
snippet muiDrawerTemporary
	<Drawer
	  variant="temporary"
	  anchor="\${1|left,right,top,bottom|}"
	  open={$2}
	  onClose={$3}
	  $4
	>
	  $5
	</Drawer>
	
snippet muiEndAdornment
	
	endAdornment={
	  <InputAdornment position="end">
	    $0
	  </InputAdornment>
	}
	
	
snippet muiExpansionPanel
	<ExpansionPanel>
	  <ExpansionPanelSummary
	    expandIcon={<ExpandMore />}
	    aria-label="\${1:Expand}"
	    aria-controls="$2-content"
	    id="$2-header"
	  >
	    <Typography$3>$4</Typography>
	  </ExpansionPanelSummary>
	  <ExpansionPanelDetails>$5</ExpansionPanelDetails>
	</ExpansionPanel>
	
snippet muiExpansionPanelControlled
	<ExpansionPanel expanded={$1} onChange={$2}>
	  <ExpansionPanelSummary
	    expandIcon={<ExpandMore />}
	    aria-label="\${3:Expand}"
	    aria-controls="$4-content"
	    id="$4-header"
	  >
	    <Typography$5>$6</Typography>
	  </ExpansionPanelSummary>
	  <ExpansionPanelDetails>$7</ExpansionPanelDetails>
	</ExpansionPanel>
	
snippet muiFab
	<Fab color="\${1|default,inherit,primary,secondary|}" aria-label="$2"$3>
	  <$4Icon />
	</Fab>
	
snippet muiFabExtended
	<Fab variant="extended" color="\${1|default,inherit,primary,secondary|}" aria-label="$2"$3>
	  <Box marginRight={1}><$4Icon /></Box>
	  $5
	</Fab>
	
snippet muiFormControl
	<FormControl$1>
	  <FormLabel>$2</FormLabel>
	  $0
	  <FormHelperText>$3</FormHelperText>
	</FormControl>
	
snippet muiFormControlGroup
	<FormControl component=\${1:"fieldset"}$2>
	  <FormLabel component=\${3:"legend"}>$4</FormLabel>
	  <FormGroup>
	    $0
	  </FormGroup>
	  <FormHelperText>$5</FormHelperText>
	</FormControl>
	
snippet muiGridContainer
	<Grid container spacing={$1}$2>
	  $3
	</Grid>
	
snippet muiGridContainerCenter
	<Grid
	  container
	  spacing={\${1:1}}\${2:
	  direction="\${3|row,row-reverse,column,column-reverse|}"}
	  justify="\${4:center}"
	  alignItems="\${5:center}"
	  alignContent="\${6:center}"\${7:
	  wrap="\${8|nowrap,wrap,wrap-reverse|}"}
	  $9
	>
	  $10
	</Grid>
	
snippet muiGridContainerFull
	<Grid
	  container\${1:
	  spacing={\${2:1}\}}\${3:
	  direction="\${4|row,row-reverse,column,column-reverse|}"}\${5:
	  justify="\${6|flex-start,center,flex-end,space-between,space-around,space-evenly|}"}\${7:
	  alignItems="\${8|flex-start,center,flex-end,stretch,baseline|}"}\${9:
	  alignContent="\${10|stretch,center,flex-start,flex-end,space-between,space-around|}"}\${11:
	  wrap="\${12|nowrap,wrap,wrap-reverse|}"}
	  $13
	>
	  $14
	</Grid>
	
snippet muiGridListSubheader
	<GridListTile cols={\${1:2}} style={{ height: 'auto' }}>
	  <ListSubheader component="div">$2</ListSubheader>
	</GridListTile>
	
snippet muiGridListTilebar
	<GridListTileBar\${1:
	  title="$2"}\${3:
	  subtitle="$4"}\${5:
	  actionIcon={
	    <IconButton aria-label="$6"$7>
	      $8
	    </IconButton>
	  \}}
	/>
	
snippet muiIconButton
	<IconButton aria-label="$1" onClick={$2}$3>
	  $4
	</IconButton>
	
snippet muiMenu
	<Menu id="$1" anchorEl={$2} keepMounted open={Boolean($2)} onClose={$3}$4>
	  $5
	</Menu>
	
snippet muiMenuItem
	<MenuItem onClick={$1}$2>$3</MenuItem>
	
snippet muiMenuPopupState
	<Menu
	  id="$1"
	  keepMounted
	  {...bindMenu(\${2:popupState})}
	  $3
	>
	  $4
	</Menu>
	
snippet muiRadioGroup
	<FormControl component=\${1:"fieldset"}$2>
	  <FormLabel component=\${3:"legend"}>$4</FormLabel>
	  <RadioGroup aria-label="$5" name="$6" value={$7} onChange={$8}>$0</RadioGroup>
	  <FormHelperText>$9</FormHelperText>
	</FormControl>
	
snippet muiRadioLabel
	<FormControlLabel value="$1" label="$2" control={<Radio$3 />} />
	
snippet muiRadioLabelPlacement
	<FormControlLabel
	  value="$1"
	  label="$2"
	  labelPlacement="\${3|end,start,top,bottom|}"
	  control={<Radio$4 />}
	/>
	
snippet muiSelectItem
	<MenuItem value={$1}$2>$3</MenuItem>
	
snippet Controlled
	<Slider
	  value={$1}
	  onChange={$2}
	  aria-labelledby="$3"
	  min={\${4:0}}
	  max={\${5:100}}
	  $6
	/>
	
snippet Uncontrolled
	<Slider
	  defaultValue={$1}
	  aria-labelledby="$2"
	  min={\${3:0}}
	  max={\${4:100}}
	  $5
	/>
	
snippet Controlled
	<Slider
	  value={$1}
	  onChange={$2}
	  aria-labelledby="$3"
	  step={\${4:1}}
	  marks
	  min={\${5:0}}
	  max={\${6:100}}
	  $7
	/>
	
snippet Uncontrolled
	<Slider
	  defaultValue={$1}
	  aria-labelledby="$2"
	  step={\${3:1}}
	  marks
	  min={\${4:0}}
	  max={\${5:100}}
	  $6
	/>
	
snippet muiSnackbar
	<Snackbar
	  anchorOrigin={{ vertical: '$1', horizontal: '$2' }}
	  open={$3}
	  onClose={$4}
	  message="$5"\${6:
	  action={
	    <IconButton size="small" aria-label="close" color="inherit" onClick={$4\}>
	      <Close fontSize="small" />
	    </IconButton>
	  \}}
	/>
	
snippet muiSnackbarContent
	<SnackbarContent message="$1" action={$2} />
	
snippet muiStartAdornment
	
	startAdornment={
	  <InputAdornment position="start">
	    $0
	  </InputAdornment>
	}
	
	
snippet muiStep
	<Step key={$1} completed={$2}$3>
	  <StepLabel>$4</StepLabel>
	</Step>
	
snippet muiStepContent
	<Step key={$1} completed={$2}$3>
	  <StepLabel>$4</StepLabel>
	  <StepContent>
	    $5
	  </StepContent>
	</Step>
	
snippet muiStepOptional
	<Step key={$1} completed={$2}$3>
	  <StepLabel
	    optional={<Typography variant="caption">\${4:Optional}</Typography>}
	  >
	    $5
	  </StepLabel>
	</Step>
	
snippet muiStepper
	<Stepper activeStep={$1}>
	  $2
	</Stepper>
	
snippet muiSwipeableViews
	<SwipeableViews
	  axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
	  index={$1}
	  onChangeIndex={$2}
	  $3
	>
	  $0
	</SwipeableViews>
	
snippet Controlled
	<Switch
	  value="$1"
	  checked={$2}
	  onChange={$3}
	  inputProps={{ "aria-label": '$4' }}
	  $5
	/>
	
snippet Uncontrolled
	<Switch
	  value="$1"
	  defaultChecked={$2}
	  inputProps={{ "aria-label": '$3' }}
	  $4
	/>
	
snippet Controlled
	<FormControlLabel
	  label="$1"
	  control={
	    <Switch
	      value="$2"
	      checked={$3}
	      onChange={$4}
	      $5
	    />
	  }
	/>
	
snippet Uncontrolled
	<FormControlLabel
	  label="$1"
	  control={
	    <Switch
	      value="$2"
	      defaultChecked={$3}
	      $4
	    />
	  }
	/>
	
snippet Controlled
	<FormControlLabel
	  label="$1"
	  labelPlacement="\${2|end,start,top,bottom|}"
	  control={
	    <Switch
	      value="$3"
	      checked={$4}
	      onChange={$5}
	      $6
	    />
	  }
	/>
	
snippet Uncontrolled
	<FormControlLabel
	  label="$1"
	  labelPlacement="\${2|end,start,top,bottom|}"
	  control={
	    <Switch
	      value="$3"
	      defaultChecked={$4}
	      $5
	    />
	  }
	/>
	
snippet muiTabPanel
	<TabPanel value={$1} index={$2} \${3:dir={theme.direction\}}$4>
	  $5
	</TabPanel>
	
snippet muiTabs
	<AppBar position="static" color="\${1|primary,default,inherit,secondary,transparent|}"$2>
	  <Tabs value={$3} onChange={$4} aria-label="$5"$6>
	    $7
	  </Tabs>
	</AppBar>
	
snippet muiTabsScrollable
	<AppBar position="static" color="\${1|primary,default,inherit,secondary,transparent|}"$2>
	  <Tabs
	    value={$3}
	    onChange={$4}
	    aria-label="$5"
	    variant="scrollable"
	    scrollButtons="\${6:auto}"
	    $7
	  >
	    $8
	  </Tabs>
	</AppBar>
	
snippet Controlled
	<TextField
	  id="$1"
	  label="$2"
	  value={$3}
	  onChange={$4}
	  $5
	/>
	
snippet Uncontrolled
	<TextField
	  id="$1"
	  label="$2"
	  defaultValue={$3}
	  $4
	/>
	
snippet Controlled
	<TextField
	  id="$1"
	  label="$2"\${3:
	  variant="\${4|standard,outlined,filled|}"}\${5:
	  color="$\{6|primary,secondary|}"}\${7:
	  margin="\${8|none,dense,normal|}"}\${9:
	  sizes="\${10|small,medium|}"}
	  value={$11}
	  onChange={$12}
	  $13
	/>
	
snippet Uncontrolled
	<TextField
	  id="$1"
	  label="$2"\${3:
	  variant="\${4|standard,outlined,filled|}"}\${5:
	  color="\${6|primary,secondary|}"}\${7:
	  margin="\${8|none,dense,normal|}"}\${9:
	  sizes="\${10|small,medium|}"}
	  defaultValue={$11}
	  $12
	/>
	
snippet Controlled
	<TextField
	  id="$1"
	  label="$2"
	  select
	  value={$3}
	  onChange={$4}
	  $5
	/>
	
snippet Uncontrolled
	<TextField
	  id="$1"
	  label="$2"
	  select
	  defaultValue={$3}
	  $4
	/>
	
snippet Controlled
	<TextField
	  id="$1"
	  label="$2"
	  variant="\${3|standard,outlined,filled|}"
	  value={$4}
	  onChange={$5}
	  $6
	/>
	
snippet Uncontrolled
	<TextField
	  id="$1"
	  label="$2"
	  variant="\${3|standard,outlined,filled|}"
	  defaultValue={$4}
	  $5
	/>
	
snippet muiTooltip
	<Tooltip title="$1"$2>
	  $TM_SELECTED_TEXT$0
	</Tooltip>
	
snippet muiTypography
	<Typography variant="\${1|h1,h2,h3,h4,h5,h6,subtitle1,subtitle2,body1,body2,caption,button,overline,srOnly,inherit|}" \${2:color="\${3|initial,inherit,primary,secondary,textPrimary,textSecondary,error|}"}$4>$TM_SELECTED_TEXT$0</Typography>
	

`),
		(t.scope = "javascript_react")
})
;(function () {
	window.require(["ace/snippets/javascript_react"], function (m) {
		if (typeof module == "object" && typeof exports == "object" && module) {
			module.exports = m
		}
	})
})()
