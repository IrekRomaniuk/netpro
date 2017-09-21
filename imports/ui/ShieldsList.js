import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';
import Griddle, { plugins, RowDefinition, ColumnDefinition } from 'griddle-react';

import { Shields } from '../api/shields';
import ShieldsListItem from './ShieldsListItem';

export default class ShieldsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shields: []
    };
  }
  componentDidMount() {
    console.log('componentDidMount ShieldsList');
    this.shieldsTracker = Tracker.autorun(() => {
      Meteor.subscribe('robo');
      const shields = Shields.find({}).fetch();
      this.setState({ shields });
    });
  }
  componentWillUnmount() {
    console.log('componentWillUnmount ShieldsList');
    this.shieldsTracker.stop();
  }
 
  render() {
    return (
        <div>         
         <Griddle styleConfig={styleConfig}
            data={this.state.shields}
            plugins={[plugins.LocalPlugin]}
            components={{
                Layout: NewLayout
            }}
            sortProperties={sortProperties}
            pageProperties={{
                currentPage: 1,
                pageSize: 18,
                //recordCount: 100,                
            }}            
         >   
            <RowDefinition>
                <ColumnDefinition id="Name" title="Name" customHeadingComponent={CustomHeading}/>
                <ColumnDefinition id="Ext" title="External IP" customComponent={CustomLocationComponent}/>
                <ColumnDefinition id="Int" title="Internal IP" customComponent={CustomLocationComponent}/>
                <ColumnDefinition id="Policy" title="Policy Name" /> 
                <ColumnDefinition id="Comment" title="Comment" style={{fontSize: 4}}/>               
            </RowDefinition>
         </Griddle>
        <p><br />Total number of shields in database is  
           <span style={{color: "blue"}}> {this.state.shields.length}</span>
        </p>
        </div>
    );
  }
};
/* <div>
    {this.state.shields.length}
    {this.renderShieldsListItems()}
</div>*/ 
// customComponent={CustomColumn}
const CustomColumn = ({value}) => <span style={{ color: '#0000AA' }}>{value}</span> 
// customHeadingComponent={CustomHeading}
const CustomHeading = ({title}) => <span style={{ color: '#AA0000' }}>{title}</span>
// customComponent={CustomLocationComponent}
const CustomLocationComponent = ({value}) => <a href={`https:///${value}:4434/>`} target="_blank">{value}</a>
const NewLayout = ({ Table, Pagination, Filter, SettingsWrapper }) => (
    <div>
      <Filter />     
      <Table />
      <Pagination />
    </div>
  );

const sortProperties = [
    { id: 'Name', sortAscending: true },
]    

const styleConfig = {
    icons: {
      TableHeadingCell: {
        sortDescendingIcon: '▼',
        sortAscendingIcon: '▲',  //<small>(asc)</small>
      },
    },
    classNames: {
        Cell: 'griddle-cell',
        Filter: 'griddle-filter',
        Loading: 'griddle-loadingResults',
        NextButton: 'griddle-next-button',
        NoResults: 'griddle-noResults',
        PageDropdown: 'griddle-page-select',
        Pagination: 'griddle-pagination',
        PreviousButton: 'griddle-previous-button',
        Row: 'griddle-row', //'row-class',
        RowDefinition: 'griddle-row-definition',
        Settings: 'griddle-settings',
        SettingsToggle: 'griddle-settings-toggle',
        Table: 'griddle-table',
        TableBody: 'griddle-table-body',
        TableHeading: 'griddle-table-heading',
        TableHeadingCell: 'griddle-table-heading-cell',
        TableHeadingCellAscending: 'griddle-heading-ascending',
        TableHeadingCellDescending: 'griddle-heading-descending',
    },
    styles: {
      Filter: { fontSize: 18 },
      Table: { border: "2px solid #555 "},
      //Row: { border: "1px solid" },
      Cell: { border: "1px solid" },
    }
  }

