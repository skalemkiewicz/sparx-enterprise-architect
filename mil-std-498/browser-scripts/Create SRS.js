!INC Local Scripts.EAConstants-JScript
!INC MIL-STD.srs-structure
!INC MIL-STD.gen-struct

/*
 * This code has been included from the default Project Browser template.
 * If you wish to modify this template, it is located in the Config\Script Templates
 * directory of your EA install path.   
 * 
 * Script Name:
 * Author:
 * Purpose:
 * Date:
 */

/*
 * Project Browser Script main function
 */
function OnProjectBrowserScript()
{
	// Get the type of element selected in the Project Browser
	var treeSelectedType = Repository.GetTreeSelectedItemType();
	
	// Handling Code: Uncomment any types you wish this script to support
	// NOTE: You can toggle comments on multiple lines that are currently
	// selected with [CTRL]+[SHIFT]+[C].
	switch ( treeSelectedType )
	{
		case otPackage :
		{
			// Code for when a package is selected
			var thePackage as EA.Package;
  			thePackage = Repository.GetTreeSelectedObject();
  			createStructure(thePackage, SRS_STRUCTURE);
			Repository.RefreshModelView(0);
  			break;
		}
		default:
		{
			// Error message
			Session.Prompt( "This script does not support items of this type.", promptOK );
		}
	}
}

OnProjectBrowserScript();
