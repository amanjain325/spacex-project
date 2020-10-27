import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'filters',
    templateUrl: './filters.component.html',
})
export class FiltersComponent {

    @Output() filterAppliedEve: EventEmitter<any> = new EventEmitter();

    constructor(private _router: Router, private _activatedRouter: ActivatedRoute) { }

    filters = [
        {
            label: 'launch year',
            key: 'launch_year',
            options: [
                { label: '2006', key: '2006' },
                { label: '2007', key: '2007' },
                { label: '2008', key: '2008' },
                { label: '2009', key: '2009' },
                { label: '2010', key: '2010' },
                { label: '2011', key: '2011' },
                { label: '2012', key: '2012' },
                { label: '2013', key: '2013' },
                { label: '2014', key: '2014' },
                { label: '2015', key: '2015' },
                { label: '2016', key: '2016' },
                { label: '2017', key: '2017' },
                { label: '2018', key: '2018' },
                { label: '2019', key: '2019' },
                { label: '2020', key: '2020' }
            ]
        },
        {
            label: 'Successfull launch',
            key: 'launch_success',
            options: [
                { label: 'True', key: 'true' },
                { label: 'False', key: 'false' }
            ]
        },
        {
            label: 'Successfull landing',
            key: 'landing_success',
            options: [
                { label: 'True', key: 'true' },
                { label: 'False', key: 'false' }
            ]
        }
    ]

    ngOnInit() {
        this._activatedRouter.queryParams.subscribe((queryParams: any) => {
            this.filters.forEach((filter: any) => {
                if (queryParams[filter.key]) {
                    let filteredOption = filter.options.filter((option: any) => {
                        return option.key == queryParams[filter.key];
                    });
                    filteredOption[0].selected = true;
                }
            });
        });
    }

    applyFilter(filter: any, option: any) {
        if (option.selected) {
            option.selected = false;
        } else {
            let selectedFilterOptions = filter.options.filter((option: any) => {
                return option.selected;
            });
            if (selectedFilterOptions && selectedFilterOptions.length) {
                selectedFilterOptions[0].selected = false;
            };
            option.selected = true;
        }
        this.emitFilterEvent();
    }

    emitFilterEvent() {
        let appliedFilters = {};
        this.filters.forEach((filter: any) => {
            filter.options.forEach((option: any) => {
                if (option.selected) {
                    appliedFilters[filter.key] = option.key
                };
            });
        });
        this._router.navigate([], { queryParams: appliedFilters })
        // we can also emit filter applied event and read in parent component.
        // this.filterAppliedEve.emit(appliedFilters);
    }
}



