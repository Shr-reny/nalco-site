var $ = jQuery;
$( function() {
    var availableTags = [
      {value:"Capex file tracking system", link:'#capex'},
      {value:"Content Management System",link:'http://10.60.235.33/CMS/'},
      {value:"Human Resource Information System (MyData)",link:'#hris'},
      {value:"Loans",link:'#loans'},
      {value:"ADMIN",link:'#admin'},
      {value:"HR",link:'http://10.60.235.33/HR/'},
      {value:"MIS",link:'#mis'},
      {value:"egreetings",link:'http://10.60.235.33/HR/'},
      {value:"Pre-requisites",link:'http://10.60.235.33/HR/'},
      {value:"Post Retirement Medical",link:'http://10.60.235.33/HR/'},
      {value:"Contract Labour Management System",link:'#clms'},
      {value:"Capital Expenditure Monitoring",link:'#cem'},
    ];
    $( "#search" ).autocomplete({
      source: availableTags,
      select: function( event, ui ) {
        console.log(ui.item.link);
        window.location.replace(ui.item.link)
      }
    });
  } );

  
