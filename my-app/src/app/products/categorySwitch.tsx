import { Button, ButtonGroup } from "@mui/material";
import { useAppSelector } from "../lib/hooks";
interface CategorySwitchProps {
	setSelectedCategory: Function;
	selectedCategory: string;
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
		<div className="CategorySwitch my-3 d-flex justify-content-center align-items-center">
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
			</ButtonGroup>
		</div>
	);
};

export default CategorySwitch;
