showDebug = 3;

if (wfTask == "Application Acceptance" && wfStatus == "Accepted - Plan Review Req") {
	activateTask("Certificate of Occupancy");
	showDebug = true;
}