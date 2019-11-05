!INC Local Scripts.EAConstants-JScript

const TVAL_CTR = "_AUTONUM_CTR_";
const TVAL_PFX = "_AUTONUM_PFX_";
const TVAL_LEN = "_AUTONUM_LEN_";

function configAutoNumber(package, prefix, len, elementType)
{
	var pkg as EA.Package;
	pkg = package;
	
	var ctrName = TVAL_CTR + elementType;
	var pfxName = TVAL_PFX + elementType;
	var lenName = TVAL_LEN + elementType;
	
	var tvCtr = pkg.Element.TaggedValues.GetByName(ctrName);
	var tvPfx = pkg.Element.TaggedValues.GetByName(pfxName);
	var tvLen = pkg.Element.TaggedValues.GetByName(lenName);
	
	if (tvCtr != null || tvPfx != null || tvLen != null)
	{
		return false;
	}
	
	tvCtr = pkg.Element.TaggedValues.AddNew(ctrName, 0);
	//tvCtr.Value = "0";
	tvCtr.Update();
	
	tvPfx = pkg.Element.TaggedValues.AddNew(pfxName, prefix);
	//tvPfx.Value = prefix;
	tvPfx.Update();
	
	tvLen = pkg.Element.TaggedValues.AddNew(lenName, len);
	//tvLen.Value = len;
	tvLen.Update();
	
	return true;
}

function autonumber(package)
{
	var pkg as EA.Package;
	pkg = package;
	
	var ctrName = TVAL_CTR + elementType;
	var pfxName = TVAL_PFX + elementType;
	var lenName = TVAL_LEN + elementType;
	
	var tvCtr = pkg.Element.TaggedValues.GetByName(ctrName);
	var tvPfx = pkg.Element.TaggedValues.GetByName(pfxName);
	var tvLen = pkg.Element.TaggedValues.GetByName(lenName);
}

var contextPackage as EA.Package;
contextPackage = Repository.GetContextObject();

Session.Output(configAutoNumber(contextPackage, "ENV-R-", 4, "requirement"));