var Cashier = function () {
    // showLoader();
    // Private functions

    // demo initializer
    return {
        CashierJSONArray: [],

        init: function () {
            this.fetchcashierData();
        },

        fetchcashierData: async function () {
            try {
                const response = await fetch('/Brand/GetAll');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const CashierResponseData = await response.json();

                console.log(CashierResponseData);

                //this.CashierJSONArray = CashierResponseData.data; before
                //chat gpt code
                this.CashierJSONArray = CashierResponseData.data.map(x => {
                    return {
                        ...x,
                        isActive: x.isActive ? "1" : "0",   // boolean → string
                        //isDeleted: x.isDeleted ? "1" : "0"
                    };
                });

                // Initialize the datatable
                this.initialize();
            } catch (error) {
                console.error('Fetch error:', error);
            }
        },

        initialize: function () {
            var datatable = $('#Eventkt_datatable').KTDatatable({
                // datasource definition
                data: {
                    type: 'local',
                    source: this.CashierJSONArray,
                    pageSize: 10,
                },

                
                // layout definition
                layout: {
                    scroll: false, // enable/disable datatable scroll both horizontal and vertical when needed.
                    // height: 450, // datatable's body's fixed height
                    footer: false, // display/hide footer
                },

                // column sorting
                sortable: true,

                pagination: true,

                search: {
                    input: $('#Brand__search_query'),
                    key: 'generalSearch'
                },

                // columns definition
                columns: [
                    { 
                        field: 'brandId',
                        title: 'Brand Id',
                        sortable: false,
                        visible: false,
                        width: 50,
                        textAlign: 'center',
                    },
                    {
                        field: 'SR',
                        title: 'Sr.',
                        width: 30,
                        template: function (row, index) {
                            return ++index;
                        }
                    },
                    {
                        field: 'brandName',
                        title: 'Brand'
                    },
                    {
                        field: 'isDeleted',
                        title: 'Is Deleted',
                        template: function (row) {
                            return row.isDeleted
                                ? '<span class="badge badge-danger">Deleted</span>'
                                : '<span class="badge badge-success">Not Deleted</span>';
                        }
                    },
                    {
                        field: 'isActive',
                        title: 'Is Active',
                        template: function (row) {
                            return row.isActive =="1"
                                ? '<span class="badge badge-success">Active</span>'
                                : '<span class="badge badge-danger">Inactive</span>';
                        }
                    },
                   
                    {
                        field: 'createdDate',
                        title: 'Created Date',
                    },
                    {
                        field: 'updatedDate',
                        title: 'Updated Date',
                    },
                    {
                        field: 'description',
                        title: 'Description'
                    },
                    {
                        field: 'action',
                        title: 'Actions',
                        sortable: false,
                        width: 125,
                        template: function (row) {
                            return `
                <a href="javascript:;" class="btn btn-sm btn-clean btn-icon mr-2" 
                    title="Edit" data-id="${row.brandId}" onclick="Editformof(this)">
                    <i class="la la-edit"></i>
                </a>
                <a href="javascript:;" class="btn btn-sm btn-clean btn-icon" 
                    title="Delete" data-id="${row.brandId}" onclick="DeleteformBrand(this)">
                    <i class="la la-trash"></i>
                </a>
            `;
                        }
                    },
                   
                    {
                        field: 'createdBy',
                        title: 'Created By',
                    },

                    {
                        field: 'updatedBy',
                        title: 'Updated By',
                    },
                  
                 
                ]
,
            });
            $('#Brand_search_status').on('change', function (row) {
                datatable.search($(this).val(), 'isActive');
            });
        }

    };
    hideLoader();


}();




jQuery(document).ready(function () {
    Cashier.init();
});

function Editformof(element) {
    const GetById = element.dataset.id;
    if (!GetById) {
        console.error("User id is missing.");
        return;
    }
    $.ajax({
        url: "/Brand/GetById",
        type: "GET",
        data: { Id: GetById },
        success: function (response) {
            if (response.status) { 
                const data = response.data;
                console.log("Full Response:", response);

                $('#brandid').val(data.brandId);
                $('#brandname').val(data.brandName);
                //$('#isdeleted').prop('checked', data.isDeleted);
                //$('#isactive').prop('checked', data.isActive);
                //$('#sortorder').val(data.sortOrder);
                //$('#createddate').val(data.createdDate);
                //$('#updateddate').val(data.updatedDate);
                //$('#createdby').val(data.createdBy);
                //$('#updatedby').val(data.updatedBy);
                $('#description').val(data.description);

                $('#exampleModal').modal('show');
            }
            else {
                console.warn("No data found:", response.message);
            }
        },
        error: function (xhr) {
            console.error("AJAX Error:", xhr);
        },
    });


}

// delete  successfully complete run 
function DeleteformBrand(element) {
    const Id = element.dataset.id;
    if (!Id) {
        console.error("User id is missing.");
        return;
    }
    swal.fire({
        title: "Are you sure?",
        text: "You wont be able to revert this!",
        type: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!"
    }).then(function (result) {
        if (result.value) {
            $.ajax({
                url: "/Brand/Delete",
                type: "DELETE",
                data: { Id: Id },// right side ka jo functiona me variavle banaye h o h of left side ka method me pass id h
                success: function (response) {
                    if (response.status = true) {
                        swal.fire(
                            "Deleted!",
                            "Your file has been deleted.",
                            "success"
                        )

                        //  Cashierdatatable.fetchcashierData(); // yaha per bhi change hoga funation name cashierdatatable
                        location.reload();


                    }
                    else {
                        console.warn("No data found for the given User Id");
                    }

                },
                error: function () {
                    console.error("AJAX Error");
                },

            });
        }
    });
}






