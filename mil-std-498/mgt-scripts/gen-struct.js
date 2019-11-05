!INC Local Scripts.EAConstants-JScript

function createStructure(pkg, def)
{
	for (var i = 0; i < def.length; i++)
	{
		var item = def[i];
		if (item.object === "package")
		{
			_createPackage(pkg, item, i);
		}
		else if (item.object === "element")
		{
			Session.Output("package: " + item.name);
		}
	}
}

function _createPackage(package, def, treePos)
{
	var pkg as EA.Package;
	pkg = package;
	
	var newPkg = pkg.Packages.AddNew(def.name, "");
	newPkg.TreePos = treePos;
	newPkg.Update();
	pkg.Packages.Refresh();
	
	if (def.text != null) 
	{
		_addNotes(newPkg, def.text);
	}
	
	if (def.instructions != null) 
	{
		_addInstrTv(newPkg, def.instructions);
	}
	
	if (def.contents != null)
	{
		for (var i = 0; i < def.contents.length; i++)
		{
			_createPackage(newPkg, def.contents[i], i);
		}
	}
}

function _addNotes(package, textArr)
{
	var pkg as EA.Package;
	pkg = package;
	
	var string = "";
	for (var i = 0; i < textArr.length; i++)
	{
		if (i != 0)
		{
			string += "\r\n";
		}
		string += textArr[i];
	}
	
	if (string !== "")
	{
		pkg.Notes = string;
		pkg.Update();
	}
}

function _addInstrTv(package, instrArr)
{
	var pkg as EA.Package;
	pkg = package;
	
	var string = "";
	for (var i = 0; i < instrArr.length; i++)
	{
		if (i != 0)
		{
			string += "\r\n";
		}
		string += instrArr[i];
	}
	
	if (string !== "")
	{
		var tv = pkg.Element.TaggedValues.AddNew("Instructions", "<memo>");
		tv.Notes = string;
		tv.Update();
	}
}
