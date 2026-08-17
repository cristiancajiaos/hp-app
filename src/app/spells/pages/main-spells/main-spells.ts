import { Component, inject } from '@angular/core';
import { SpellService } from '../../services/spell-service';
import { rxResource } from '@angular/core/rxjs-interop';
import { Loading } from '../../../shared/components/loading/loading';

@Component({
  selector: 'app-main-spells',
  imports: [Loading],
  templateUrl: './main-spells.html',
  styleUrl: './main-spells.css',
})
export class MainSpells {
  private spellService = inject(SpellService);

  spellResource = rxResource({
    params: () => {
      return { foo: 'foo' };
    },
    stream: ({params}) => {
      return this.spellService.getSpells();
    }
  });
}
