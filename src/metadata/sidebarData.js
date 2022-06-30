const sideBarNavs = [
    {
        title: 'ABS',
        columnName: 'Absolute',
        description: 'Absolute value of a number',
        returnType: "number",
        returnValue: "-3.652909139",
        optionValues: [
            {
                value: 'DEC',
                title: 'DEC'
            },
            {
                value: 'First ABS',
                title: '1'
            },
            {
                value: 'Second ABS',
                title: '2'
            },
            {
                value: 'Third ABS',
                title: '3'
            }
        ],
        active: true
    },
    {
        title: 'DISTANCE',
        columnName: 'Distance',
        description: 'Distance between locations',
        returnType: "number",
        returnValue: "6465 km",
        optionValues: [
            {
                title: 'First DISTANCE',
                value: '1'
            },
            {
                title: 'Second DISTANCE',
                value: '2'
            },
            {
                title: 'Third DISTANCE',
                value: '3'
            }
        ],
        active: true
    },
    {
        title: 'TRAVELTIME',
        columnName: 'Travel Time',
        description: 'Travel time between two points',
        returnType: "string",
        returnValue: "5h 7m",
        optionValues: [
            {
                title: '1',
                value: 'First TRAVELTIME'
            },
            {
                value: '2',
                title: 'Second TRAVELTIME'
                
            },
            {
                value: '3',
                title: 'Third TRAVELTIME'
                
            }
        ],
        active: true
    },
    {
        title: 'RANDBETWEEN',
        columnName: 'Random Between',
        description: 'Uniformy random Integer',
        returnType: "number",
        returnValue: "645654",
        optionValues: [
            {
                title: 'First RANDBETWEEN',
                value: '1'
            },
            {
                title: 'Second RANDBETWEEN',
                value: '2'
            },
            {
                title: 'Third RANDBETWEEN',
                value: '3'
            }
        ],
        active: true
    },
    {
        title: 'TEMPLATE',
        columnName: 'Template',
        description: 'Template with variables',
        returnType: "template",
        returnValue: "<div>Dummy Template</div>",
        optionValues: [
            {
                title: 'First TEMPLATE',
                value: '1'
            },
            {
                title: 'Second TEMPLATE',
                value: '2'
            },
            {
                title: 'Third TEMPLATE',
                value: '3'
            }
        ],
        active: true
    },
    {
        title: 'SPLIT',
        columnName: 'Split',
        description: 'Split a string',
        returnType: "string",
        returnValue: "Hello World",
        optionValues: [
            {
                title: 'First SPLIT',
                value: '1'
            },
            {
                title: 'Second SPLIT',
                value: '2'
            },
            {
                title: 'Third SPLIT',
                value: '3'
            }
        ],
        active: true
    },
    {
        title: 'TRIM',
        columnName: 'Trim',
        description: 'Trim Spaces',
        returnType: "string",
        returnValue: "Hello World",
        optionValues: [
            {
                title: 'First TRIM',
                value: '1'
            },
            {
                title: 'Second TRIM',
                value: '2'
            },
            {
                title: 'Third TRIM',
                value: '3'
            }
        ],
        active: true
    },
    {
        title: 'NOW',
        columnName: 'Now',
        description: 'Current Date & Time',
        returnType: "Date & Time",
        returnValue: "Thursday, 30 June 2022 1:14 am",
        optionValues: [
            {
                title: 'First NOW',
                value: '1'
            },
            {
                title: 'Second NOW',
                value: '2'
            },
            {
                title: 'Third NOW',
                value: '3'
            }
        ],
        active: true
    },
    {
        title: 'TODAY',
        columnName: 'Today',
        description: 'Today`s Date',
        returnType: "Date & Time",
        returnValue: "Thursday, 30 June 2022 1:14 am",
        optionValues: [
            {
                title: 'First TODAY',
                value: '1'
            },
            {
                title: 'Second TODAY',
                value: '2'
            },
            {
                title: 'Third TODAY',
                value: '3'
            }
        ],
        active: true
    },
    {
        title: 'LATEST',
        columnName: 'Latest',
        description: 'Latest Date & Time',
        returnType: "Date & Time",
        returnValue: "Thursday, 30 June 2022 1:14 am",
        optionValues: [
            {
                title: 'First LATEST',
                value: '1'
            },
            {
                title: 'Second LATEST',
                value: '2'
            },
            {
                title: 'Third LATEST',
                value: '3'
            }
        ],
        active: true
    }
];
export default sideBarNavs;