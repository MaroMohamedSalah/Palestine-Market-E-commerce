"use client";
import { Button, ButtonGroup } from "@mui/material";
import { useAppSelector } from "../lib/hooks";
interface CategorySwitchProps {
	setSelectedCategory: Function;
	selectedCategory?: string | null;
}
const CategorySwitch: React.FC<CategorySwitchProps> = ({
	setSelectedCategory,
	selectedCategory,
}) => {
	const products = useAppSelector((state) => state.rootReducer.products);
	// Extract unique category names
	const categories: string[] = [];

	products.forEach((product) => {
		if (!categories.includes(product.category)) {
			categories.push(product.category);
		}
	});
	return (
		<div className="CategorySwitch z-2 w-100 m-0 py-3 d-flex justify-content-center align-items-center">
			<ButtonGroup
				size="large"
				variant="outlined"
				aria-label="Basic button group"
			>
				{categories.map((c) => (
					<Button
						className={`${c === selectedCategory ? "active" : ""}`}
						key={c}
						onClick={() => setSelectedCategory(c)}
					>
						{c}
					</Button>
				))}
				<Button onClick={() => setSelectedCategory("all")}>All</Button>
			</ButtonGroup>
		</div>
	);
};

export default CategorySwitch;
