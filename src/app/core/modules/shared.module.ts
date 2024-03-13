import { NgModule } from "@angular/core";
import { TruncatePipe } from "src/app/helpers/pipes/truncate.pipe";
import { ModalComponent } from '../components/modal/modal.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
    declarations: [
        TruncatePipe,
        ModalComponent
    ],
    imports: [
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [TruncatePipe, ModalComponent, FormsModule,
        ReactiveFormsModule]
})
export class SharedModule {}