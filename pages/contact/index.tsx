import { NextPage } from 'next';

const Index: NextPage = () => {
  return (
    <div>
      お問い合わせ
      <div>
        <form
          className="formrun"
          action="https://form.run/api/v1/r/22nlcue43v2sug2m0ata0ssv"
          method="post"
        >
          <label>
            会社名<span>必須</span>
          </label>
          <input name={'会社名'} type={'text'} data-formrun-required />
          <div data-formrun-show-if-error={'会社名'}>お名前を入力してください</div>

          <label>
            部署<span>任意</span>
          </label>
          <input name={'部署'} type={'text'} />

          <label>
            役職<span>任意</span>
          </label>
          <input name={'役職'} type={'text'} />

          <label>
            お名前<span>必須</span>
          </label>
          <input name={'お名前'} type={'text'} data-formrun-required />
          <div data-formrun-show-if-error={'お名前'}>お名前を入力してください</div>

          <label>
            メールアドレス<span>必須</span>
          </label>
          <input
            name={'メールアドレス'}
            type={'text'}
            data-formrun-type={'email'}
            data-formrun-required
          />
          <div data-formrun-show-if-error={'メールアドレス'}>
            メールアドレスを正しく入力してください
          </div>

          <label>
            電話番号<span>必須</span>
          </label>
          <input name={'電話番号'} type={'text'} data-formrun-type={'tel'} data-formrun-required />
          <div data-formrun-show-if-error={'電話番号'}>メールアドレスを正しく入力してください</div>

          <label>
            電話番号<span>必須</span>
          </label>
          <textarea name={'お問い合わせ'} data-formrun-required></textarea>
          <div data-formrun-show-if-error={'お問い合わせ'}>お問い合わせ入力してください</div>

          <div className="_formrun_gotcha">
            <style media={'screen'}>
              ._formrun_gotcha {`position:absolute!important;height:1px;width:1px;overflow:hidden;`}
            </style>
            <label>If you are a human, ignore this field</label>
            <input type={'text'} name={'_formrun_gotcha'} id={'_formrun_gotcha'} />
          </div>

          <button
            type={'submit'}
            data-formrun-error-text={'未入力の項目があります'}
            data-formrun-submitting-text={'送信中...'}
          >
            送信
          </button>
        </form>
      </div>
    </div>
  );
};

export default Index;
