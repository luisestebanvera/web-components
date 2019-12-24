(function(){
	class Tooltip extends HTMLElement {
		constructor(){
			super();
			this._tooltipContainer;
			this._tooltipText = 'heyyy';
			
		}

		connectedCallback() {

			if (this.hasAttribute('data-text')) {
				this._tooltipText = this.getAttribute('data-text');
			}

			const tooltipIcon = document.createElement('div');
			tooltipIcon.textContent = ' Tomalo';
			if(this.hasAttribute('data-shadow-dom')) {
				this.attachShadow({ mode: 'open' })
				this.shadowRoot.appendChild(tooltipIcon);
			} else {
				this.appendChild(tooltipIcon);
			}

			tooltipIcon.addEventListener('mouseenter', this._showTooltip.bind(this));
			tooltipIcon.addEventListener('mouseleave', this._hideTooltip.bind(this));
			
		}

		_showTooltip() {
			this._tooltipContainer = document.createElement('small');
			this._tooltipContainer.textContent = this._tooltipText;
			this.hasAttribute('data-shadow-dom') ? this.shadowRoot.appendChild(this._tooltipContainer) : this.appendChild(this._tooltipContainer);
		}

		_hideTooltip() {
			this.hasAttribute('data-shadow-dom') ? this.shadowRoot.removeChild(this._tooltipContainer) : this.removeChild(this._tooltipContainer);
		}
	}

	customElements.define('app-tooltip', Tooltip);
})();


