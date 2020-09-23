import { NgModule } from '@angular/core';

import { ToolbarModule } from 'primeng/toolbar';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { CardModule } from 'primeng/card';
import { FieldsetModule } from 'primeng/fieldset';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ToastModule } from 'primeng/toast';
// import { ChartModule } from 'primeng/chart';
import { GMapModule } from 'primeng/gmap';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { SidebarModule } from 'primeng/sidebar';
import { TableModule } from 'primeng/table';
import { SelectButtonModule } from 'primeng/selectbutton';
import { MultiSelectModule } from 'primeng/multiselect';
import {DropdownModule} from 'primeng/dropdown';
import {CarouselModule} from 'primeng/carousel';
import {PanelModule} from 'primeng/panel';
import {TabMenuModule} from 'primeng/tabmenu';
import {SlideMenuModule} from 'primeng/slidemenu';
import {MegaMenuModule} from 'primeng/megamenu';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {StepsModule} from 'primeng/steps';
import {PasswordModule} from 'primeng/password';
import {GalleriaModule} from 'primeng/galleria';
import {TabViewModule} from 'primeng/tabview';
import {MenubarModule} from 'primeng/menubar';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {InputNumberModule} from 'primeng/inputnumber';
import {ScrollPanelModule} from 'primeng/scrollpanel';
import {DataViewModule} from 'primeng/dataview';

@NgModule({
  exports: [
    ToolbarModule,
    InputTextModule,
    CheckboxModule,
    CardModule,
    FieldsetModule,
    ProgressSpinnerModule,
    ToastModule,
    // ChartModule,
    GMapModule,
    DialogModule,
    ButtonModule,
    MenuModule,
    SidebarModule,
    TableModule,
    SelectButtonModule,
    MultiSelectModule,
    DropdownModule,
    CarouselModule,
    PanelModule,
    TabMenuModule,
    SlideMenuModule,
    MegaMenuModule,
    InputTextareaModule,
    StepsModule,
    PasswordModule,
    GalleriaModule,
    TabViewModule,
    MenubarModule,
    MessageModule,
    MessagesModule,
    InputNumberModule,
    ScrollPanelModule,
    DataViewModule
  ]
})
export class PrimengCustomModule { }
