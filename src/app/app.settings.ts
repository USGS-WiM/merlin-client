import { Injectable } from '@angular/core';
import { Headers } from '@angular/http';
import { HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable()
export class APPSETTINGS {
    private static _environment = 'development';

    public static get API_ROOT() {
        return environment.api_root;
    }

    public static get IS_LOGGEDIN(): boolean { return (!!sessionStorage.getItem('username') && !!sessionStorage.getItem('password')); }

    public static get APP_URL(): string { return ''; }

    // ENDPOINTS
    public static get AUTH_URL(): string { return this.API_ROOT + 'auth/'; }
    public static get ACIDS_URL(): string { return this.API_ROOT + 'acids/'; }
    public static get ANALYSES_URL(): string { return this.API_ROOT + 'analyses/'; }
    public static get BLANKWATERS_URL(): string { return this.API_ROOT + 'blankwaters/'; }
    public static get BOTTLES_URL(): string { return this.API_ROOT + 'bottles/'; }
    public static get BOTTLEPREFIXES_URL(): string { return this.API_ROOT + 'bottleprefixes/'; }
    public static get BOTTLETYPES_URL(): string { return this.API_ROOT + 'bottletypes/'; }
    public static get BROMINATIONS_URL(): string { return this.API_ROOT + 'brominations/'; }
    public static get CONSTITUENTS_URL(): string { return this.API_ROOT + 'constituents/'; }
    public static get COOPERATORS_URL(): string { return this.API_ROOT + 'cooperators/'; }
    public static get DETECTIONSFLAGS_URL(): string { return this.API_ROOT + 'detectionflags/'; }
    public static get FILTERS_URL(): string { return this.API_ROOT + 'filters/'; }
    public static get ISOTOPEFLAGS_URL(): string { return this.API_ROOT + 'isotopeflags/'; }
    public static get MEDIUMS_URL(): string { return this.API_ROOT + 'mediums/'; }
    public static get METHODS_URL(): string { return this.API_ROOT + 'methods/'; }
    public static get PRESEVATIONS_URL(): string { return this.API_ROOT + 'preservations/'; }
    public static get PROJECTS_URL(): string { return this.API_ROOT + 'projects/'; }
    public static get PROJECTSITES_URL(): string { return this.API_ROOT + 'projectssites/'; }
    public static get PROCESSINGS_URL(): string { return this.API_ROOT + 'processings/'; }
    public static get QUALITYASSURANCES_URL(): string { return this.API_ROOT + 'qualityassurances/'; }
    public static get QUALITYASSURANCESTYPES_URL(): string { return this.API_ROOT + 'qualityassurancetypes/'; }
    public static get RESULTS_URL(): string { return this.API_ROOT + 'results/'; }
    public static get RESULTSDATAFILES_URL(): string { return this.API_ROOT + 'resultdatafiles/'; }
    public static get SAMPLES_URL(): string { return this.API_ROOT + 'samples/'; }
    public static get SAMPLEBOTTLES_URL(): string { return this.API_ROOT + 'samplebottles/'; }
    public static get SAMPLEBOTTLEBROMINATIONS_URL(): string { return this.API_ROOT + 'samplebottlebrominations/'; }
    public static get SITES_URL(): string { return this.API_ROOT + 'sites/'; }
    public static get UNITS_URL(): string { return this.API_ROOT + 'units/'; }
    public static get USERS_URL(): string { return this.API_ROOT + 'users/'; }
    public static get FULLRESULTS_URL(): string { return this.API_ROOT + 'fullresults/'; }
    public static get FULLSAMPLEBOTTLES_URL(): string { return this.API_ROOT + 'fullsamplebottles/'; }
    public static get BULKACIDS_URL(): string { return this.API_ROOT + 'bulkacids/'; }
    public static get BULKBLANKWATERS_URL(): string { return this.API_ROOT + 'bulkblankwaters/'; }
    public static get BULKBOTTLES_URL(): string { return this.API_ROOT + 'bulkbottles/'; }
    public static get BULKBOTTLEPREFIXES_URL(): string { return this.API_ROOT + 'bulkbottleprefixes/'; }
    public static get BULKBROMINATIONS_URL(): string { return this.API_ROOT + 'bulkbrominations/'; }
    public static get BULKCOOPERATORS_URL(): string { return this.API_ROOT + 'bulkcooperators/'; }
    public static get BULKPROJECTSSITES_URL(): string { return this.API_ROOT + 'bulkprojectssites/'; }
    public static get BULKRESULTS_URL(): string { return this.API_ROOT + 'bulkresults/'; }
    public static get BULKSAMPLES_URL(): string { return this.API_ROOT + 'bulksamples/'; }
    public static get BULKSAMPLEBOTTLES_URL(): string { return this.API_ROOT + 'bulksamplebottles/'; }
    public static get BULKSAMPLEBOTTLEBROMINATIONS_URL(): string { return this.API_ROOT + 'bulksamplebottlebrominations/'; }
    public static get BULKSITES_URL(): string { return this.API_ROOT + 'bulksites/'; }

    /* public static get MIN_AUTH_JSON_HEADERS() {
        return new Headers({
            // 'Authorization': 'Basic ' + btoa(sessionStorage.username + ':' + sessionStorage.password),
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        });
    } */

    public static get JSON_HEADERS() { return new Headers({ 'Accept': 'application/json', 'Content-Type': 'application/json' }); }
}
