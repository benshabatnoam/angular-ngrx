import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';

import { IAppState } from '../../store/state/app.state';
import { selectSelectedUser } from '../../store/selectors/user.selector';
import { GetUser } from '../../store/actions/user.actions';
import { selectGetError } from 'src/app/store/selectors/result.selector';

@Component({
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user$ = this._store.pipe(select(selectSelectedUser));
  error$ = this._store.pipe(select(selectGetError));

  constructor(
    private _store: Store<IAppState>,
    private _route: ActivatedRoute
  ) {}

  ngOnInit() {
    this._store.dispatch(new GetUser(this._route.snapshot.params.id));
  }
}
