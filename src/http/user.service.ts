import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { IAddNote } from "src/app/user/models/user.interface";
import { environment } from "src/environments/environment";
import { FileUploader } from 'ng2-file-upload';
import { LoadingController, ToastController } from "@ionic/angular";
import { finalize } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class UserService {
  private userSource = new BehaviorSubject<any>(
    undefined as any
  );
  user$ = this.userSource.asObservable();

  uploader:FileUploader;

  constructor(
    private http: HttpClient,
    private loadingController: LoadingController,
    private toastController: ToastController
    ) {}

  /**
   * send post to save notes from user
   * @summary sendNotes
   * @param data: INotes
   * @returns Observable<void>
   */
  sendNotes(data: IAddNote) {
    const url = `${environment.apiUrl}login`;
    return this.http.post<any>(url, data).pipe((userResp) => userResp);
  }

    /**
   * send post to save images from user
   * @summary sendImages
   * @param img: INotes
   * @returns Observable<void>
   */
    async sendImages(img: string) {
      const URL = `${environment.apiUrl}fileuploader/upload/images`;
      const file = img;
      const reader = new FileReader();
      let blob = await fetch(URL).then((r) => r.blob()); //blob:url
  
      reader.readAsDataURL(blob);
  
      reader.onloadend = function () {
          const base64data = reader.result;
      };
      //return this.http.post<any>(url, img).pipe((userResp) => userResp);
    }

    async uploadImageData(formData: FormData, imgEntry, position) {
      const URL = `${environment.apiUrl}fileuploader/upload/images`;
      const loading = await this.loadingController.create({
        message: 'Uploading image...'
      });
      await loading.present();
      this.http.post(URL, formData).pipe(finalize(() => {
        loading.dismiss();
      })
    )
      .subscribe(res => {
        if (res['success']) {
          this.presentToast('File upload complete.');
        } else {
          this.presentToast('File upload failed.');
        }
      });
    }

  async presentToast(msg: string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 1500,
      position: "bottom",
    });

    await toast.present();
  }


  /**
   * send post to save images from user
   * @summary sendImages
   * @param img: INotes
   * @returns Observable<void>
   */
    // sendImages(img: string) {
    //   const reqHeader = new HttpHeaders({ 
    //     'Content-Type': 'application/json',
    //     'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('user'))
    //  });
    //  const url = `${environment.apiUrl}fileuploader/upload/images`;
    //   const fileTransfer: FileTransferObject = this.transfer.create();
    //   let options: FileUploadOptions = {
    //     fileKey: img,
    //     fileName: 'name.jpg',
    //     headers: reqHeader
    //  }
   
    //  fileTransfer.upload(img, url, options)
    //   .then((data) => {
    //     // success
    //     console.log("FT upload: ", data)
    //   }, (err) => {
    //     // error
    //     console.log("FT error: ", err)
    //   })
    // }

  /**
   * send post to save notes from user
   * @summary addNote
   * @param data: IAddNote
   */
  addNote(data: IAddNote) {
    const url = `${environment.apiUrl}accessrequests/add`;
    return this.http.post<any>(url, data).pipe((userResp) => userResp);
  }

  /**
   * get user info from QR
   * @summary getUserByQr
   * @param uuid: string
   */
  getUserByQr(uuid: string) {
    const reqHeader = new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('user'))
   });
    const url = `${environment.apiUrl}accessrequests/getdata/${uuid}`;
    return this.http.get<any>(url, {headers: reqHeader}).pipe((userResp) => userResp);
  }

  /**
   * get user info by name
   * @summary getUserByName
   * @param name: string
   */
  getUserByName(name: string) {
    const reqHeader = new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('user'))
   });
    const url = `${environment.apiUrl}accessrequests/index?page=1&limit=10&search=${name}`;
    return this.http.get<any>(url, {headers: reqHeader}).pipe((userResp) => userResp);
  }

  /**
   * select user from user list in search component
   * @summary getUserByName
   * @param name: string
   */
  selectUser(user: any) {
    this.userSource.next(user);
  }
}
