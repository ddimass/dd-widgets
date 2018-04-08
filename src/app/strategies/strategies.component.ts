import { Component, OnInit } from '@angular/core';
import { Strategy } from '../strategy';

@Component({
  selector: 'app-strategies',
  templateUrl: './strategies.component.html',
  styleUrls: ['./strategies.component.css']
})
export class StrategiesComponent implements OnInit {
	strat: Strategy = {
		id: 1,
		title: 'Стратегия «Скальпинг Parabolic SAR + CCI»',
		short: '<p>Данная стратегия основана на использовании индикаторов Parabolic SAR и Commodities Channel Index. Это импульсная скальпирующая стратегия, базирующаяся на текущем тренде цены.</p>',
		text: `<p>Данная стратегия основана на использовании индикаторов Parabolic SAR и Commodities Channel Index. Это импульсная скальпирующая стратегия, базирующаяся на текущем тренде цены.</p>
 <p>Инструменты: EUR/USD, AUD/USD, GBP/USD.</p>
 <p>Таймфреймы: M1, M5.</p>
 <p>Индикаторы:</p>
 <ol>
 <li>Средняя скользящая EMA50 для таймфрейма М1</li>
 <li>Средняя скользящая EMA21 для таймфрейма M5</li>
 <li>CCI (45)</li>
 <li>Parabolic SAR (0.02, 0.2)</li>
 </ol>
 <p><strong>Условия для открытия длинных позиций:</strong></p>
 <p>Точка индикатора Parabolic SAR находится выше линии EMA, &nbsp;значение индикатора CCI выше 100.</p>
 <p><strong>Условия для открытия коротких позиций:</strong></p>
 <p>Точка индикатора Parabolic SAR находится ниже линии EMA, &nbsp;значение индикатора CCI ниже 100.</p>
 <p><strong>Точка выхода: </strong></p>
 <p>Цель: EUR/USD (7-12 пунктов), AUD/USD (5-8 пунктов), GBP/USD (7-15 пунктов).</p>
 <p>Уровень стоп-лосса выставляется на уровне линии EMA.</p>
 <p><strong>Buy</strong></p>
 <p><img src="https://media.clawshorns.com/uploads/files/b1339e5c10ef14d486a7b511c295ed17.png" alt="" width="700" height="552" /></p>
 <p><strong>Sell</strong></p>
 <p><img src="https://media.clawshorns.com/uploads/files/bd3959fb86c22a269ea0d5a1f36f6e68.png" alt="" width="700" height="552" /></p>`,
 		timeframe: 'M1',
 		img: 'ca428f20ba538d03ab4dcd1183ba764f.png',
 		lang: 'ru',
 		status: 1,
	};

  constructor() { }

  ngOnInit() {
  }

}
