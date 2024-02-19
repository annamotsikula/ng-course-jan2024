import { NgModule } from "@angular/core";
import { TruncatePipe } from "src/app/helpers/pipes/truncate.pipe";
import { ModalComponent } from '../components/modal/modal.component';

@NgModule({
    declarations: [
        TruncatePipe,
        ModalComponent
    ],
    imports: [],
    exports: [TruncatePipe, ModalComponent]
})
export class SharedModule {}