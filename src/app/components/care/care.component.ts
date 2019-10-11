import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


import { Care } from 'src/app/shared/care.model';
import { CareService } from 'src/app/shared/care.service';

declare var M: any;
@Component({
    selector: 'app-care',
    templateUrl: './care.component.html',
    styleUrls: ['./care.component.css'],
    providers: [CareService]

})
export class CareComponent implements OnInit {

    constructor(private careService: CareService) { }

    ngOnInit() {
        this.resetForm();
        this.refreshCareList();
    }

    resetForm(form?: NgForm) {
        if (form)
            form.reset();
        this.careService.selectedCare = {
            _id: '',
            name: '',
            quantity: null,
            description: ''

        }
    }
    onSubmit(form: NgForm) {
        if (form.value._id === '') {
            this.careService.postCare(form.value).subscribe((res) => {
                this.resetForm(form);
                this.refreshCareList();
                M.toast({ html: 'Saved successfully', classes: 'rounded' });
            });
        } else {
            this.careService.putCare(form.value).subscribe((res) => {
                this.resetForm(form);
                this.refreshCareList();
                M.toast({ html: 'Updated successfully', classes: 'rounded' });
            });
        }
    }

    onEdit(care: Care) {
        this.careService.selectedCare = care;
    }


    refreshCareList() {
        this.careService.getCareList().subscribe((res) => {
            this.careService.cares = res as Care[];
        });
    }

    onDelete(_id: string, form: NgForm) {
        if (confirm('Are you sure to delete this record ?') == true) {
            this.careService.deleteCare(_id).subscribe((res) => {
                this.refreshCareList();
                this.resetForm(form);
                M.toast({ html: 'Deleted successfully', classes: 'rounded' });
            });
        }
    }



}
