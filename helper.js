/*pin This function will help you to fix path suggetions*/
function r() {
	var fileOprator = f4
	var editor = e;
	var fileSystem = g4;

	return (
		(r = n(
			regeneratorRuntime.mark(function t(session, prefix) {
				var output, path, o, workspacePath, results
				return regeneratorRuntime.wrap(function(t) {
					for (;;)
						switch ((t.prev = t.next)) {
							case 0:
								output = Object.create(null) //if  does not start with /
								if (!prefix.startsWith("/")) {
									t.next = 6
									break
								}

								;
								(path = "/"), (t.next = 25)
								break
							case 6:

								if (!session.inode) {
									t.next = 25
									break
								}

								path = fileSystem.inodePath(session.inode)

								if (!path) {
									t.next = 25 //Shows working directory files
									break
								}


								//#mainak #navigation//#nav
								var lasttext = prefix.split("/")
								lasttext.length -= 1
								var yy = lasttext.join("/")
								workspacePath = editor.session && editor.session.ue()

								path = fileOprator.deepJoin(fileOprator.dirname(path), yy)
								if (path.replace(/\/$/gi, "").split("/").length < workspacePath.split("/").length)
									path = workspacePath
								o = 0
								t.next = 30
								return fileSystem.readdir(path)
							case 11:
								if (!(prefix.length > 0 && o < 10)) {
									t.next = 25
									break
								}
								if (!prefix.startsWith("./")) {
									t.next = 16
									break
								};
								(prefix = prefix.slice(2)), (t.next = 22)
								break
							case 16:
								if (!prefix.startsWith("../")) {
									t.next = 21
									break
								};
								(prefix = prefix.slice(3)), (path = fileOprator.dirname(path)), (t.next = 22)
								break
							case 21:
								return t.abrupt("break", 25)
							case 22:
								o++, (t.next = 33)
								break
							case 25: //#mainak shows current dir files

								workspacePath = editor.session && editor.session.ue()

								if (!(path && prefix && workspacePath)) {
									t.next = 33
									break
								}

								path = fileOprator.deepJoin(workspacePath, fileOprator.dirname(prefix))
								return path, (t.next = 30), fileSystem.readdir(path)
							case 30:
								;
								(results = t.sent),
								(prefix = fileOprator.basename(prefix)),
								results.forEach(function(result) {


									if (result) {
										if (result.charAt(0) != ".") {
											//info  Avoiding hidden files 
											output[result] = result.startsWith(prefix) * results.length * 0.2
										}
									}

								})
							case 33:
								return t.abrupt("return", output)
							case 34:
							case "end":
								return t.stop()
						}
				}, t)
			})
		)),

		r.apply(this, arguments)
	)
}

document.body.style.setProperty('--commet-font-icons-size','12px')
