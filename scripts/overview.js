/* 
! Governor Module
Need a dropdown to select governor
Export get governor from database
Import to governor module
Build dropdown of active governors
    ^ I. Filter out inactive governors    
Facilities function will check transientState to check for governorId 
?   get current transient state, check if it's holding a governor.  
    * If null, do nothing
    ^ If governor id exists, output colony name and any minerals purchased. 
When governor is selected, choose facility

! Facilities Module
Import facilities from database
Build dropdown of active facilities
Filter out inactive facilities
User chooses a facility to shop from

Chosen facility will provide radio buttons for mineral selection
Import minerals for the selected facility from database
Generate a list of each mineral and the quantity available for purchase. 

Clicked radio button will add selected mineral to the “shopping cart”

Purchase button will reduce amount of selected material by 1 ton, and add to selected governor’s minerals supply.
Save state of new quantity of minerals remaining in facility database
Save state of new quantity of minerals purchased in governor database
*/