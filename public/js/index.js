'use strict';
$(document).ready(function () {
    $('#reRun').on('change', function () {
        if ($('#reRun').val() == 'Yes') {
            $('#showBuildNumber').show();
        } else {
            $('#showBuildNumber').hide();
        }
    });

    $('#maintenanceType').on('change', function () {
        if ($('#maintenanceType').val() == 'systemMaintenance') {
            $('#systemActivities').show();
            $('#serverActivities').hide();
        } else if ($('#maintenanceType').val() == 'serverMaintenance') {
            $('#serverActivities').show();
            $('#systemActivities').hide();
        } else {
            $('#serverActivities').hide();
            $('#systemActivities').hide();
        }
    });
})