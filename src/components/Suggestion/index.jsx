import React, { useContext, useEffect, useRef, useState } from "react";
import {
	Container,
	Context,
	Divider,
	Search,
	SearchIcon,
	IoSearch,
	Trends,
	Trend,
	List,
	Item,
	License,
	Colleter,
	STrends,
	Join,
	NavBtn,
	NavBtnLink,
	Icons,
	IoPersonCircle,
	IoCart,
	IoBookmark,
} from "./style";
import { SearchContext } from "../../context/searchContext";
import { useUserContext } from "../../context/userContext";
import logo from "../../imagens/logo.png";
import { Link } from "react-router-dom";

function Suggestion(props) {
	const { user } = useUserContext;
	const { tokenProduct, setTokenProduct } = useContext(SearchContext);
	console.log(tokenProduct);
	let pha;
	let route;
	if (user !== null) {
		pha = "Publicar";
		route = "/publication";
	} else {
		pha = "Entrar";
		route = "/login";
	}

	useEffect(() => {}, []);
	return (
		<Container>
			<Context>
				{/* <Search>
					<SearchIcon>
						<IoSearch />
					</SearchIcon>
					<input
						placeholder="Search"
						onChange={(e) => setTokenProduct(e.target.value)}
					/>
				</Search> */}
				<Join>
					{/* <Trend>Poste agora</Trend> */}
					<Icons>
						<IoPersonCircle></IoPersonCircle>
						<IoCart></IoCart>
						<IoBookmark></IoBookmark>
					</Icons>
					<NavBtn>
						<NavBtnLink to={route}>{pha}</NavBtnLink>
					</NavBtn>
				</Join>
				{/* <Divider /> */}
				<Trends>
					<Trend>Em Alta</Trend>
					<Colleter>
						<Link to="/search_result/Tomate">
							<span className="search"># Tomate</span>
						</Link>
						{/* <span className="item">🍇 Uva</span>
						<span className="item">🍍 Abacaxi</span> */}
					</Colleter>
					<Colleter>
						<Link to="/search_result/Tomate">
							<span className="search"># Pera</span>
						</Link>
					</Colleter>
					<Colleter>
						<Link to="/search_result/Tomate">
							<span className="search"># Limão</span>
						</Link>
					</Colleter>
					<Colleter>
						<Link to="/search_result/Tomate">
							<span className="search"># Banana</span>
						</Link>
					</Colleter>
					<Colleter>
						<Link to="/search_result/Tomate">
							<span className="search"># Cereja</span>
						</Link>
					</Colleter>
					<Colleter>
						<Link to="/search_result/Tomate">
							<span className="search"># Pizza</span>
						</Link>
					</Colleter>
					<Colleter>
						<Link to="/search_result/Tomate">
							<span className="search"># Suco</span>
						</Link>
					</Colleter>
					<Colleter>
						<Link to="/search_result/Tomate">
							<span className="search"># Arroz</span>
						</Link>
					</Colleter>
					<Colleter>
						<Link to="/search_result/Tomate">
							<span className="search"># Feijão</span>
						</Link>
					</Colleter>
					<Colleter>
						<Link to="/search_result/Tomate">
							<span className="search"># Manga</span>
						</Link>
					</Colleter>
				</Trends>
				{/* <Divider /> */}
				<STrends>
					<License>#TáNoPrecin</License>
					<img src={logo}></img>
				</STrends>
				<STrends>
					<License>Precin © Todos os direitos Reservados</License>
				</STrends>
			</Context>
		</Container>
	);
}

export default Suggestion;
